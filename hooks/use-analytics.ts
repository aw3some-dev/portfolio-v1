import React from 'react';
import ReactGA from 'react-ga4';

type PageViewParams = {
  pathname: string;
  pageTitle: string;
};

type EventParams = {
  category: string;
  action: string;
  label?: string;
  /**
   * @optional
   * @number
   */
  value?: number;
  nonInteraction?: boolean;
  transport?: 'beacon' | 'xhr' | 'image' | undefined;
};

const useAnalytics = (params: PageViewParams) => {
  const [isProductionEnvironment, _setIsProductionEnvironment] = React.useState(
    process.env.NODE_ENV === 'production'
  );

  const [_isAnalyticsDisabled, _setIsAnalyticsDisabled] = React.useState(
    !!process.env.REACT_APP_DISABLE_ANALYTICS
  );

  React.useEffect(() => {
    ReactGA.initialize('G-L41ZVE776E');
    sendPageViewEvent(params);
  }, []);

  function sendPageViewEvent(params: PageViewParams) {
    if (isProductionEnvironment) {
      ReactGA.send({
        hitType: 'pageview',
        page: window.location.origin + params.pathname,
        title: params.pageTitle
      });
    }
  }

  function sendCustomEvent(eventParams: EventParams) {
    if (isProductionEnvironment) {
      ReactGA.event({ ...eventParams });
    }
  }

  return {
    sendCustomEvent
  };
};

export default useAnalytics;
