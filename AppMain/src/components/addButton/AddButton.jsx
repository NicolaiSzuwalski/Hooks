import styles from './AddButton.module.scss';

export const AddButton = ({event}) =>{
    return( 
        
            <div onClick={event} className={styles.addButton} >
                <span className="material-symbols-outlined">add_circle</span>
                <p>Add new</p>
            </div>
        
    )
}

export default AddButton;