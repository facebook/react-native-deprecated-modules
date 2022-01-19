/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import <MapKit/MapKit.h>

#import "RCTConvert.h"

@class RCTMapAnnotation;
@class RCTMapOverlay;

@interface RCTConvert (MapKit)

+ (MKCoordinateSpan)MKCoordinateSpan:(id)json;
+ (MKCoordinateRegion)MKCoordinateRegion:(id)json;
+ (MKMapType)MKMapType:(id)json;

+ (RCTMapAnnotation *)RCTMapAnnotation:(id)json;
+ (RCTMapOverlay *)RCTMapOverlay:(id)json;

+ (NSArray<RCTMapAnnotation *> *)RCTMapAnnotationArray:(id)json;
+ (NSArray<RCTMapOverlay *> *)RCTMapOverlayArray:(id)json;

@end
