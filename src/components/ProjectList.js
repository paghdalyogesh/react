import React from 'react' 
 
const ProjectList = ({data}) => {
  return (
    <div className="card">
    <ul className="list-group list-group-flush">
      {data && data.ht.map(data =>
        <li className="list-group-item" key={data.p}>{data.nm}
        <p>{data.ad}</p></li>
      )}
    </ul>
  </div>
  )
}

export default ProjectList