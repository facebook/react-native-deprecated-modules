# 3.0.0 / 2019-05-05

- Compatible with React Native 0.71
- Improvements to `ImagePropTypes`
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
