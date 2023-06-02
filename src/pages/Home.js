import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
    const [Competitor, setCompetitor] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        loadCompetitors();
    }, []);

    const loadCompetitors = async () => {
        const result = await axios.get("http://localhost:8080/competitor");
        setCompetitor(result.data);
    };

    const deleteCompetitor = async (id) => {
        await axios.delete(`http://localhost:8080/competitor/${id}`);
        loadCompetitors();
    };

    return (
        <div className="container">
            <div className="py-4">
                <table className="table border shadow">
                    <thead>
                    <tr>
                        <th scope="col">TYpe</th>
                        <th scope="col">Point</th>
                        <th scope="col">CompetitionPlayed</th>
                        <th scope="col">DefeatCount</th>
                        <th scope="col">victorycount</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Competitor.map((user, index) => (
                        <tr>
                            <th scope="row" key={index}>
                                {index + 1}
                            </th>
                            <td>{Competitor.name}</td>
                            <td>{Competitor.Type}</td>
                            <td>{user.points}</td>
                            <td>
                                <Link
                                    className="btn btn-primary mx-2"
                                    to={`/viewuser/${Competitor.id}`}
                                >
                                    View
                                </Link>
                                <Link
                                    className="btn btn-outline-primary mx-2"
                                    to={`/edit/${Competitor.id}`}
                                >
                                    Edit
                                </Link>
                                <button
                                    className="btn btn-danger mx-2"
                                    onClick={() => deleteCompetitor(Competitor.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}