import React from 'react';
import styles from './Domain.module.css';
import { executivesList } from '../assets/executives_data';

function MyComponent(props) {
  return (
    <div className={styles.executives_data}>
      {/* Child 1 */}
      <div className={styles.child_data}>
        <h3>{props.name1}</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {executivesList.map((heads) => {
            if (heads.Domain === props.name1) {
              return <li key={heads.Name}>{heads.Name}</li>;
            }
            return null;
          })}
        </ul>
      </div>

      {/* Child 2 */}
      <div className={styles.child_data}>
        <h3>{props.name2}</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {executivesList.map((heads) => {
            if (heads.Domain === props.name2) {
              return <li key={heads.Name}>{heads.Name}</li>;
            }
            return null;
          })}
        </ul>
      </div>

      {/* Child 3 */}
      <div className={styles.child_data}>
        <h3>{props.name3}</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {executivesList.map((heads) => {
            if (heads.Domain === props.name3) {
              return <li key={heads.Name}>{heads.Name}</li>;
            }
            return null;
          })}
        </ul>
      </div>
    </div>
  );
}

export default MyComponent;
