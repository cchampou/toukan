import { createClient } from 'contentful';

const client = createClient({
  space: 'skguyjb5ywgk',
  accessToken: '0drId1AxcsYaoUqG2W5INF47w49fM0OBJUxL69XBo8s',
  host: 'preview.contentful.com',
});

export const toVideoItem = (item) => ({
  id: item.sys.id,
  thumbnail: item.fields.thumbnail.fields.file.url,
  file: item.fields.asset.fields.file.url,
  title: item.fields.title,
});

export const toPhotoItem = (item) => ({
  id: item.sys.id,
  title: item.fields.title,
  file: item.fields.image.fields.file.url,
});

export const getContentType = (item) => item.sys.contentType.sys.id;

export default client;
