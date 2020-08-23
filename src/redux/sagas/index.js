import { takeEvery, select, call, put } from 'redux-saga/effects';
import { Load } from '../actionTypes';
import { fetchImages } from '../../api';
import { setError, setImages } from '../actionGenerator';

const getPage = (state) => state.nextPage;
function* handleImagesLoad() {
  try {
    const page = yield select(getPage);
    const images = yield call(fetchImages, page);
    yield put(setImages(images));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

function* rootSaga() {
  yield takeEvery(Load, handleImagesLoad);
}

//=> watcherSaga -> action -> workerSaga
export default rootSaga;
