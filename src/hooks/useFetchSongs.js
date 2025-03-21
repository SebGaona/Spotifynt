import { useState, useEffect } from "react";
import axios from "axios";

const useFetchSongs = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!searchQuery) return;

        const fetchData = async () => {
            const options = {
                method: "GET",
                url: "https://deezerdevs-deezer.p.rapidapi.com/search",
                params: { q: searchQuery },
                headers: {
                    "x-rapidapi-key": "6fd21f003dmshd629e0a7428d46dp1acffdjsn6a695bbeea50",
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                },
            };

            try {
                const response = await axios.request(options);
                setData(response.data);
                setError(null);
            } catch (err) {
                setError(err);
                setData(null);
            }
        };

        fetchData();
    }, [searchQuery]);

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return { data, error, handleSearch };
};

export default useFetchSongs;
