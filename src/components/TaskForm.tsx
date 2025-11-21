import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { useStore } from "../stores/StoreContext";
import { useNavigate, useParams } from "react-router-dom";
import type { CreateTaskData } from "../../types/typesTask";

interface BtnSelectProps {
  active: boolean;
  priority: "low" | "medium" | "high";
}

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
  color: #e0e0e0;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  background: #181818;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #ba83de;
  }
`;
const DateInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  background: #181818;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &:focus {
    outline: none;
    border-color: #ba83de;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  background: #181818;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  resize: vertical;
  min-height: 100px;

  &:focus {
    outline: none;
    border-color: #ba83de;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 30px;
`;

const ButtonAllow = styled.button`
  flex: 1;
  padding: 14px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  background: linear-gradient(90deg, #ba83de, #de83b0);
  color: white;
`;
const ButtonDisAllow = styled.button`
  flex: 1;
  padding: 14px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  background: transparent;
  color: #ba83de;
  border: 1px solid #ba83de;
`;

const BtnLowPriority = styled.div<BtnSelectProps>`
  display: flex;
  justify-content: center;
  padding: 8px 0px;
  border-radius: 8px;
  border: 2px solid #d7f0ff;
  cursor: pointer;
  width: 33%;
  transition: 0.2s;

  background-color: ${(p) => (p.active ? "#D7F0FF" : "transparent")};
  color: ${(p) => (p.active ? "black" : "white")};

  &:hover {
    background-color: #d7f0ff;
    color: black;
  }
`;

const BtnMediumPriority = styled.div<BtnSelectProps>`
  display: flex;
  justify-content: center;
  padding: 8px 0px;
  border-radius: 8px;
  border: 2px solid #fad9ff;
  cursor: pointer;
  width: 33%;
  transition: 0.2s;

  background-color: ${(p) => (p.active ? "#FAD9FF" : "transparent")};
  color: ${(p) => (p.active ? "black" : "white")};

  &:hover {
    background-color: #fad9ff;
    color: black;
  }
`;

const BtnHighPriority = styled.div<BtnSelectProps>`
  display: flex;
  justify-content: center;
  padding: 8px 0px;
  border-radius: 8px;
  border: 2px solid #facbba;
  cursor: pointer;
  width: 33%;
  transition: 0.2s;

  background-color: ${(p) => (p.active ? "#FACBBA" : "transparent")};
  color: ${(p) => (p.active ? "black" : "white")};

  &:hover {
    background-color: #facbba;
    color: black;
  }
`;

const BtnWrapperPriority = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const ErrorMessage = styled.div`
  color: #ff6b6b;
  font-size: 14px;
  margin-top: 5px;
`;

const TaskForm = () => {
  const store = useStore();
  const navigate = useNavigate();
  const { taskId } = useParams<{ taskId: string }>();

  const isEditMode = Boolean(taskId);
  const task = isEditMode ? store.tasks.find((t) => t.id === taskId) : null;

  const [formData, setFormData] = useState<CreateTaskData>({
    title: "",
    dueDate: new Date().toISOString().split("T")[0],
    priority: "low",
    description: "",
  });

  const [errors, setErrors] = useState<{ title?: string }>({});

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title,
        dueDate: task.dueDate,
        priority: task.priority,
        description: task.description || "",
      });
    }
  }, [task, isEditMode]);

  const handleChange = (field: keyof CreateTaskData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (field === "title" && errors.title) {
      setErrors({});
    }
  };

  const validateForm = (): boolean => {
    const Errors: { title?: string } = {};

    if (!formData.title.trim()) {
      Errors.title = "Zapolni pole";
    }

    setErrors(Errors);
    return Object.keys(Errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (isEditMode && taskId) {
      store.updateTask(taskId, formData);
    } else {
      store.addTask(formData);
    }
    navigate(-1);
  };

  const handleDelete = (taskId: string) => {
    store.deleteTask(taskId);
    navigate(-1);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <FormGroup>
        <Label>Date</Label>
        <DateInput
          type="date"
          value={formData.dueDate}
          onChange={(e) => handleChange("dueDate", e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>Title</Label>
        <Input
          type="text"
          placeholder="Name"
          value={formData.title}
          onChange={(e) => handleChange("title", e.target.value)}
        />
        {errors.title && <ErrorMessage>{errors.title}</ErrorMessage>}
      </FormGroup>
      <FormGroup>
        <Label>Description</Label>
        <TextArea
          placeholder="Description"
          value={formData.description}
          onChange={(e) => handleChange("description", e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label>Priority</Label>
        <BtnWrapperPriority>
          <BtnLowPriority
            active={formData.priority === "low"}
            priority="low"
            onClick={() => handleChange("priority", "low")}
          >
            Low
          </BtnLowPriority>

          <BtnMediumPriority
            active={formData.priority === "medium"}
            priority="medium"
            onClick={() => handleChange("priority", "medium")}
          >
            Medium
          </BtnMediumPriority>

          <BtnHighPriority
            active={formData.priority === "high"}
            priority="high"
            onClick={() => handleChange("priority", "high")}
          >
            High
          </BtnHighPriority>
        </BtnWrapperPriority>
      </FormGroup>

      <ButtonGroup>
        {taskId ? (
          <>
            <ButtonAllow type="submit">Edit Task</ButtonAllow>
            <ButtonDisAllow
              type="button"
              onClick={() => {
                handleDelete(taskId);
              }}
            >
              Delete Task
            </ButtonDisAllow>
          </>
        ) : (
          <>
            <ButtonAllow type="submit">Create Task</ButtonAllow>
          </>
        )}
      </ButtonGroup>
    </form>
  );
};

export default TaskForm;
