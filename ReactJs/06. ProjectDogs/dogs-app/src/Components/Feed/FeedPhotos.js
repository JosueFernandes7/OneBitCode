import React from "react";
import FeedPhotosItem from "./FeedPhotosItem";
import useFetch from "../../Hooks/useFetch";
import { PHOTOS_GET } from "../../api";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import styles from "./FeedPhotos.module.css";

const FeedPhotos = ({setInfinite, page, user, setModalPhoto }) => {
    const { data, loading, error, request } = useFetch();
    const totalPages = 6;
    React.useEffect(() => {
        async function fetchPhotos() {
            const { url, options } = PHOTOS_GET({ page, total: totalPages, user: 0 });
            const { response, json } = await request(url, options);
            if(response && response.ok && json.length < totalPages) setInfinite(false)
        }
        fetchPhotos();
    }, [request, user]);

    if (error) return <Error erro={error} />;
    if (loading) return <Loading />;
    if (data)
        return (
            <ul className={`${styles.feed} animeLeft`}>
                {data.map((photo) => (
                    <FeedPhotosItem
                        key={photo.id}
                        photo={photo}
                        setModalPhoto={setModalPhoto}
                    />
                ))}
            </ul>
        );
    else return null;
};

export default FeedPhotos;
