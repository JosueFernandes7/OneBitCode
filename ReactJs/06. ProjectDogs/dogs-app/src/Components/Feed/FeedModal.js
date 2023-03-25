import React from "react";
import styles from "./FeedModal.module.css";
import useFetch from '../../Hooks/useFetch';
import { PHOTO_GET} from '../../api'
const FeedModal = ({ photo }) => {
    console.log(photo);
    const {data, error, loading, request} = useFetch();
    React.useEffect(() => {
            const {url, options} = PHOTO_GET(photo.id)
            request(url, options)
        
    }, [photo, request])
    return <div className={styles.modal}>
        <img src={photo.src} alt={photo.title}></img>
    </div>;
};

export default FeedModal;
