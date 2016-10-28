# Collection of modules that have been deprecated and removed from React Native

The modules in this repo have been deprecated and removed from [React Native](http://facebook.github.io/react-native/), or going to be removed soon.

You shouldn't use any of these modules in your applications - there is a good replacement for each one.

## Contributing

Please don't send pull requests or open issues on this repo. Instead, migrate your apps to the new modules, like Airbnb's `MapView`.

## Example

`MapView` was removed from React Native in favor of a new [`MapView` by Airbnb](https://github.com/airbnb/react-native-maps). You should use the MapView by Airbnb in your code.

We know you are busy making your apps awesome. Therefore we are releasing the old modules in this repo so you can upgrade your code at your own pace. In the meantime, you can do:

    import MapView from 'deprecated-react-native-ios-mapview';

    // Existing code using the deprecated MapView still works
    <MapView
      style={{width: 200, height: 200, margin: 40}}
      showsUserLocation={true}
      onRegionChangeComplete={(region) => {alert(region.longitude)}}
    />

But once you have a moment, please migrate away from the deprecated modules :) In most cases it should be easy!
