# 3.0.0 / 2019-05-05

- Compatible with React Native 0.71
- Improvements to
ImagePropTypes`
  - Merged Android and default definitions.
  - Includes all of `ViewPropTypes`.
  - Complete checks for `defaultSource` and `source`.
  - Added `alt`, `crossOrigin`, `height`, `referrerPolicy`, `src`, `srcSet`, `tintColor`, and `width`.
  - Added `objectFit` to `style`.
- Improvements to `LayoutPropTypes`
  - Changed `aspectRatio` so it can be a string ratio.
  - Added `{margin,padding}{Block,Inline}{,End,Start}`.
  - Added `columnGap`, `gap`, and `rowGap`.
- Improvements to `TextInputPropTypes`
  - Renamed `autoCompleteType` to `autoComplete`.
  - Added many new valid values for `autoComplete`.
  - Added `cursorColor`, `enterKeyHint`, `inputMode`, `lineBreakStrategyIOS`, `readOnly`, `rows`, and `submitBehavior`.
- Improvements to `ViewAccessibility`
  - Added many new valid values for `accessibilityRole`.
  - Changed `accessibilityActions` to consist of objects, not strings.
- Improvements to `TextPropTypes`
  - Added `accessibilityActions`, `accessibilityHint`, `accessibilityLabel`, `accessibilityLanguage`, `accessibilityRole`, `accessibilityState`, `aria-busy`, `aria-checked`, `aria-disabled`, `aria-expanded`, `aria-label`, `aria-labelledby`, `aria-selected`, `dynamicTypeRamp`, `id`, `lineBreakStrategyIOS`, `onAccessibilityAction`, and `role`.
  - Added `onPressIn`, `onPressOut`, `onResponderGrant`, `onResponderMove`, `onResponderRelease`, `onResponderTerminate`, `onResponderTerminationRequest`, `onStartShouldSetResponder`, `onMoveShouldSetResponder`, and `onTextLayout`.
  - Added numeric and named values for `fontWeight` in `style`.
  - Added string and stylistic values for `fontVariant` in `style`.
  - Added `userSelect` and `verticalAlign` in `style`.
- Improvements to `TransformPropTypes`
  - Removed deprecated props: `decomposedMatrix`, `rotation`, `scaleX`, `scaleY`, `transformMatrix`, `translateX`, `translateY`