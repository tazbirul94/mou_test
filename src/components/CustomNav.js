import { Nav } from 'react-bootstrap';
import { useState } from 'react';
import SageMakerNotebookInstances from './SageMakerNotebookInstances';
import EMRStudios from './EMRStudios';
// import { getRedirectUrl } from '../api/APIs';

// const postTo = (p, warn) => {
//   fetch(p, {
//     mode: 'cors',
//     method: 'POST',
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({}),
//   }).then(async (res) => {
//     if (res.ok) {
//       const data = await res.json();
//       if (!data['Status']) {
//         window.location.replace(
//           data['Location'].includes('//')
//             ? data['Location']
//             : ['//', data['Location']].join(''),
//         );
//       } else {
//         warningMessage = data['Status'];
//         warn();
//         console.log(data['Status']);
//       }
//     }
//   });
// };

const Content = () => {
  const [tab, setTab] = useState('sagemaker');
  return (
    <div className='col-md'>
      <Nav
        className='vw-color'
        fill
        justify
        variant='tabs'
        defaultActiveKey={tab}
        onSelect={setTab}
      >
        
        <Nav.Item className='navbar'>
          <Nav.Link eventKey='sagemaker'>
            <h5 className='vw-color'>Sagemaker</h5>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className='navbar'>
          <Nav.Link eventKey='vscode'>
            <h5 className='vw-color'>VSCode</h5>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className='navbar'>
          <Nav.Link eventKey='jupyter'>
            <h5 className='vw-color'>Jupyter</h5>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className='navbar'>
          <Nav.Link eventKey='emrstudio'>
            <h5 className='vw-color'>EMR Studio</h5>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div className='col-md'>
        {(() => {
          switch (tab) {
            case 'sagemaker':
              return <SageMakerNotebookInstances />;
            // case 'vscode':
            //   return ;
            // case 'jupyter':
            //   return ;
            case 'emrstudio':
              return <EMRStudios />;

            default:
              return <></>;
          }
        })()}
      </div>
      {/* <div className='d-flex justify-content-around'>
        <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
          <Button
            path='/sagemaker'
            // onClick={() => getRedirectUrl('sagemaker/notebooks')}
            text='Sagemaker Notebook'
            img={SageMaker}
          />
          <Button
            // onClick={() => getRedirectUrl(VSCODE_ENDPOINT)}
            type='button'
            text='VSCode Server'
            img={VScode}
          />

          <Button
            // onClick={() => getRedirectUrl(JUPYTER_ENDPOINT)}
            text='JupyterHub'
            img={Jupyter}
          />

          <Button
            // onClick={() => postTo(JUPYTER_ENDPOINT, () => setWarning(true))}
            text='EMR Studio'
            img={EMR}
          />
        </div>
      </div> */}
    </div>
  );
};

export default Content;
