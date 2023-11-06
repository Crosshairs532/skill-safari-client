/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const JobbyCategory = ({ job }) => {
    const { id,
        title,
        company,
        location,
        type,
        description,
        salary,
        postedDate } = job
    return (
        <div>
            <div className="card card-side w-[600px] bg-base-100 shadow-xl">
                <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">{type}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobbyCategory;