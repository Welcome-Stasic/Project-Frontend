import HeadPage from '../components/HeadCreatePage';
import { useStore } from '../stores/StoreContext';
import { useParams } from 'react-router-dom';

const CreatePage = () => {
    const store = useStore();

    const { taskId } = useParams<{ taskId: string }>();

    const EditMode = Boolean(taskId);

    const Task = EditMode ? store.tasks.find(t => t.id === taskId) : null;
    
    const HeadPageProps:{mode: 'edit' | 'create'; Title: string } =  {
        mode: EditMode ? 'edit' : 'create',
        Title: EditMode ? Task?.title || 'Task' : 'Create Task'
    };
    return (
        <>
        <div className="container">
            <HeadPage {...HeadPageProps}/>
        </div>
        </>
    );
};
export default CreatePage;