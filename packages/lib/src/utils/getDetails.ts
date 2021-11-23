const getDetails = (args: google.maps.places.PlaceDetailsRequest): Promise<google.maps.places.PlaceResult | null> => {
  const PlacesService = new window.google.maps.places.PlacesService(
    document.createElement('div')
  );
  const { OK } = window.google.maps.places.PlacesServiceStatus;

  return new Promise((resolve, reject) => {
    PlacesService.getDetails(
      args,
      (
        results: google.maps.places.PlaceResult | null,
        status: google.maps.places.PlacesServiceStatus
      ) => {
        if (status !== OK) return reject(status);

        return resolve(results || null);
      }
    );
  });
};

export default getDetails;