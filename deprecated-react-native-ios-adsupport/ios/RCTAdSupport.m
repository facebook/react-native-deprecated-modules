/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "RCTAdSupport.h"

#import <AdSupport/ASIdentifierManager.h>

#import <React/RCTUtils.h>

@implementation RCTAdSupport

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(getAdvertisingId:(RCTResponseSenderBlock)callback
                  withErrorCallback:(RCTResponseErrorBlock)errorCallback)
{
  NSUUID *advertisingIdentifier = [ASIdentifierManager sharedManager].advertisingIdentifier;
  if (advertisingIdentifier) {
    callback(@[advertisingIdentifier.UUIDString]);
  } else {
    errorCallback(RCTErrorWithMessage(@"Advertising identifier is unavailable."));
  }
}

RCT_EXPORT_METHOD(getAdvertisingTrackingEnabled:(RCTResponseSenderBlock)callback
                  withErrorCallback:(__unused RCTResponseSenderBlock)errorCallback)
{
  callback(@[@([ASIdentifierManager sharedManager].advertisingTrackingEnabled)]);
}

@end
