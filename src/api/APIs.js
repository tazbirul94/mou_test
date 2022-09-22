const DEV = window.location.origin.includes('localhost');

const GW_ENDPOINT = DEV
  ? 'https://d3bewdixfk3ll9.cloudfront.net/api'
  : `${window.location.origin}/api`;

const NOTEBOOKS_PATH = '/sagemaker/notebooks';
const STUDIOS_PATH = '/emr/studios';

// Originally a POST request, better if it is a GET
export const getRedirectUrl = async (instanceName) => {
  const res = await fetch(
    `${GW_ENDPOINT}${NOTEBOOKS_PATH}/${instanceName}/redirect`,
    {
      mode: 'cors',
      method: 'GET',
    },
  );

  if (res.ok) {
    const data = await res.json();
    return data['Location'];
  } else return null;
};

export const getNotebooks = async () => {
  const res = await fetch(`${GW_ENDPOINT}${NOTEBOOKS_PATH}`, {
    method: 'GET',
  });

  if (res.ok) {
    // array of notebook instances
    const data = await res.json();
    return data;
  } else {
    console.log(res);
    return null;
  }
};

export const updateNotebookInstance = async (instanceName, instanceType) => {
  const res = await fetch(`${GW_ENDPOINT}${NOTEBOOKS_PATH}/${instanceName}`, {
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify({
      InstanceType: instanceType,
    }),
  });

  if (res.ok) {
    const data = await res.json();
    return 'OK';
  } else {
    console.log(JSON.parse(res));
    return null;
  }
};

export const startNotebookInstance = async (instanceName) => {
  const res = await fetch(
    `${GW_ENDPOINT}${NOTEBOOKS_PATH}/${instanceName}/start`,
    {
      method: 'GET',
    },
  );

  if (res.ok) {
    return 'OK';
  } else {
    console.log(JSON.parse(res));
    return null;
  }
};

export const getStudios = async () => {
  const res = await fetch(`${GW_ENDPOINT}${STUDIOS_PATH}`, {
    method: 'GET',
  });

  if (res.ok) {
    // array of notebook instances
    const data = await res.json();
    return data;
  } else {
    console.log(res);
    return null;
  }
};
