import React, { useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { loadImages } from '../../redux/actionGenerator';
import Button from '../../components/Button';
import './index.scss';
import styled from 'styled-components';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadImages());
  }, [dispatch]);
  const { images, isLoading, error } = useSelector(
    (state) => ({
      images: state.images,
      isLoading: state.isLoading,
      error: state.error,
    }),
    shallowEqual
  );
  return (
    <Content>
        <section className='grid'>
          {images.map((image) => (
            <div
              key={image.id}
              className={`item item-${Math.ceil(image.height / image.width)}`}
            >
              <img src={image.urls.small} alt={image.user.username} />
            </div>
          ))}
        </section>
        {error && <div className='error'>{JSON.stringify(error)}</div>}
        <Button
          onClick={() => !isLoading && dispatch(loadImages())}
          loading={isLoading}
        >
          Load More
        </Button>
    </Content>
  );
};

export default Home;

export const Content = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`;
