import { PageAPI } from '@api';

import { PostAPI } from './postTypes';

async function getList(): Promise<PageAPI<PostAPI>> {
  const response = await fetch('http://127.0.0.1:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer MQ.fbAPp77B3g8kVfrLSwYrPeeCmbAN9wKmqdUVbGqjSJORJ0aqPdslOcLJ_CX9',
    },
  });

  const data: PageAPI<PostAPI> = await response.json();
  console.log(data);

  return data;
}

export const postApi = {
  getList,
};
