import React, { Suspense } from 'react';
import AppRoute from '../Router';
import Loader from '../components/Loader';

export default () => (
  <Suspense fallback={<Loader />}>
    <AppRoute />
  </Suspense>
);
