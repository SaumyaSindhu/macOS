import React from 'react';
import MacWindow from './MacWindow';
import githubData from '../../assets/github.json';
import './github.scss';

const GitCard = ({ data={id: 1, image: "", title: "", description: "", tags: [], repoLink: "", demoLink: ""} }) => {
    return <div className="card">
        <img src={data.image} alt="" />
        <h1>{data.title}</h1>
        <p>{data.description}</p>

        <div className="tags">
            {
                data.tags.map(tag => <p className='tag'>{tag}</p>)
            }
        </div>

        <div className="urls">
            <a href={data.repoLink}>Repository</a>
            <a href={data.demoLink}>Demo link</a>
        </div>
    </div>
}

const Github = ({ windowName, setWindowsState }) => {
  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState} width="820px" height="580px" x={120} y={80}>
      <div className="cards">
        {githubData.map((project) => {
          return <GitCard data={project} />;
        })}
      </div>
    </MacWindow>
  );
}

export default Github