# Interactive CYOA Creator Plus

Link to [ICC Plus](https://hikawasisters.neocities.org/ICCPlus/)

## New Features

 - Added a feature that automatically converts PNG or JPEG files larger than 500KB to WebP format upon set Choce/Row images.
 - Added a feature to set Border-Image in Manage Choice/Row Design.
 - Added a feature to download images of backpacks by splitting them if the size is too large for successful download.
 - Added a feature to manipulate choices that can be selected multiple times using 'Force another choice active' (e.g., id/ON#3).
 - Added a loading animation to the viewer.
 - Added a feature that 'X of these is selected' requirement.
 - Added a feature that 'Forces another choice active' at random.
 - Added a feature that costs points at random.
 - Added a feature that prevents each choice from being unselected.
 - Added a feature that 'Point Comparison' requirement can reference multiple point-type.
 - Added a feature to the choice function where 'Selecting this choice will duplicate a row'
 - Added a feature where change the icon color in the point bar.
 - Added a feature to specify whether the background image should repeat.
 - Added a feature to display the amount of data loaded so far during loading.
 - Added a feature to use multi-select as a requirement (ex. ID/ON#3).
 - Added a feature to change the order of points.
 - Added Global Settings Config: Auto-save, Check before delete, Dark Mode.

## Fixed

 - Fixed an issue where 'Selecting This Choice Will be Impossible' was not working properly.
 - Fixed an issue where background images were set for each row, obscuring the overall background image when 'private styling' was not enabled.
 - Fixed an issue where choices would not appear when 'private styling' was enabled and the requirements were not met.
 - Fixed an issue where choices activated by 'Force another choice active' feature could be deselected by clicking on them.
 - Fixed an issue where Addons were not being removed when the 'Remove the text of the choices' feature was activated in Backpack.
 - Fixed an issue where 'Point Comparison Requirements' could not be applied to points and addons.
 - Fixed an issue where the highlighting didn't display when multi-select was selected.
 - Fixed an issue where the subtract feature of multi-select was not working properly.
 - Fixed an issue where the Background Image was not visible when downloading Backpack as an image.
 - Fixed an issue where Clean Activated feature was not working properly.
 - Fixed an issue where multi-select choices were not deselected when losing requirements.
 - Fixed an issue of loading not completing properly when loading a large project.json file.
 - Fixed an issue where the Import Choices feature was not working properly.
 - Fixed an issue where the random choices activation feature would select choices that were already selected.
 - Fixed issues with 'Scores Updated On':
   - Now it only works when all conditions are met.
   - Instead of canceling choices, scores are recalculated.
 - Fixed an issue where multi-select bypass points were allowed to go negative.
 - Fixed an issue where multi-selects did not refund points when canceled.
 - Fixed an issue where the position of the point-icon was not displayed correctly.
 - Fixed an issue where the points icon was not being displayed on the points bar.

