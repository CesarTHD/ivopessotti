import { ReactGoogleReviews } from 'react-google-reviews';
import "react-google-reviews/dist/index.css";

const Testimonials = () => {
  const featurableWidgetId = "234b9a84-7ec5-4f80-9a08-4f9c0df31b49";

  return (
    <div className='text-center'>
      <h2 className='mb-14 text-2xl lg:text-3xl font-semibold text-blue-default'>Avaliações do Google:</h2>
      <ReactGoogleReviews layout="carousel" featurableId={featurableWidgetId} />
    </div>
  );
};

export default Testimonials;