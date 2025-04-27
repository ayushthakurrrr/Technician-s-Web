let servicePageLoaded = false;

export const hasServicePageLoaded = () => servicePageLoaded;

export const markServicePageAsLoaded = () => {
  servicePageLoaded = true;
};
