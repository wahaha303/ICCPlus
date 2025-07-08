# Interactive CYOA Creator Plus
![Chrome](https://img.shields.io/badge/Chrome-85%2B-blue?logo=google-chrome&logoColor=white)
![Firefox](https://img.shields.io/badge/Firefox-77%2B-orange?logo=firefox-browser&logoColor=white)
![Edge](https://custom-icon-badges.demolab.com/badge/Edge-85%2B-green?logo=edge-white&logoColor=white)
![Safari](https://img.shields.io/badge/Safari-13.1%2B-lightgrey?logo=safari&logoColor=white)

Stable Version: [ICC Plus 2](https://hikawasisters.neocities.org/ICCPlus2/)<br><br>

Legacy Version: [ICC Plus](https://hikawasisters.neocities.org/ICCPlus/)<br>
<i>This version is no longer maintained.</i><br>

## Framework Migration
- Rebuilt the entire codebase and migrated from Vue 2.6.11 to Svelte 5.
- Enhanced overall performance and responsiveness.

## Save System
- Added support for manual project saving via IndexedDB (Up to 99 save slots + 1 autosave slot).

## Dark Mode
- Dark mode preference is now stored in IndexedDB.

## UI Renewal
- Added button to insert new Row between existing ones.
- Added button to add new Choice after the last one within Row.
- Removed the Alternate Menu option.

## Point Type
- Added option to choose between integer and floating-point values for points.
- Added option to set custom icon for negative point values.
- '<i>Id Needed to Show</i>' now also tracks variable IDs.

## Point Bar
- When the number of points increases, the bar becomes scrollable instead of being compressed.

## Backpack
- Moved the enable/disable switch for build save/load to Global Settings.
- Images are now preloaded automatically for download, even if not yet visible via scroll.
- Fixed issue where image downloads were forcefully downscaled.
- Fixed issue with segmented image downloads not working correctly.
- Fixed issue where image downloads would fail in the Firefox browser.

## Manage Design
- Separated the design management UI into dedicated dialog, instead of displaying it at the top of the page.
- Added option to use box-shadow instead of drop-shadow.
- Fixed issue where Border Radius values were applied at 10× the intended value.

## Manage Features
- Improved performance when opening various feature dialogs.

## Global Settings
- Organized settings into categorized groups.
- Added option to move Row addition buttons into toolbar buttons.
- Added option to set autosave interval.
- Added option to disable image rendering in Edit Mode.
- Added option to inject custom CSS directly into project.
- Added option to import external CSS via URL for custom fonts (CORS support required — e.g., Neocities requires supporter account to enable CORS).

## BGM Player
- Improved slider responsiveness.
- YouTube API will no longer load if BGM is not used in CYOA (Prevents memory and data leaks).

## Requirement
- Global Requirements can now reference other Global Requirements.
- '<i>Hide when Requirement is met</i>' now applies per requirement, not only when all are satisfied.

## Choice
- Organized Choice functions into categories.
- Added option for Addons to ignore Image Template Left/Right of Choice.
- Added option to enable slider support when using Multiple Select.
- Added option to specify Rows for applying discount.
- Added option to force-show all Addons, ignoring requirements.
- Added option to change Image Template per Row/Choice/Group.
- Added option to change Choice Per Row per Row/Choice/Group.
- Added option to set Fade-in times for screen transitions.
- Choice selection is delayed, and the cursor is automatically hidden until the fade-in completes.
- Fixed issue where overlapping change image/background function would erase default values upon cancel.
- Fixed issue where point requirements triggered by selecting choice were not properly applied.

## Viewer
- Separated the build save feature into its own dialog.
- Builds are now saved per CYOA link.
- Added autosave for builds.
- Added option to adjust Choices per Row for screens between 960px and 1280px.
- Added option to allow deselecting choices in the backpack.
- Displayed the viewer version used for the current CYOA.
 