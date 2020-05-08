import { createClient } from 'contentful';

const productionConfig = {
  space: 'skguyjb5ywgk',
  accessToken: 'kvUp9Ohh94uDjR1FFx0nxVy9EJ9yeu3sV5BoJXeVoZ0',
};

const previewConfig = {
  space: 'skguyjb5ywgk',
  accessToken: '0drId1AxcsYaoUqG2W5INF47w49fM0OBJUxL69XBo8s',
  host: 'preview.contentful.com',
};

const client = createClient(process.env.NODE_ENV === 'production' ? productionConfig : previewConfig);

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

export const toSimpleItem = (item) => (getContentType(item) === 'video'
  ? toVideoItem(item) : toPhotoItem(item));

export const getReadableContentType = (item) => item.name;


export default client;
