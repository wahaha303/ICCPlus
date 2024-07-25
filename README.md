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
 - Added a feature to Auto-save in local storage.
 - Added requirements to check how many choices have been selected in rows/entire.
 - Added a feature to set Border Color and Text Color in Filter design.
 - Added a feature to apply a discount to all Choices within Groups.
 - Added a feature to set the initial value of points applied when using Clean Activated.
 - Added a feature to customize the color of each point text in the point bar.
 - Added a feature to hide choices in the Backpack.
 - Added a feature to hide the button that displays the Backpack.
 - Added a feature where the player can input their own words when selecting choice.
 - Added a feature to check how many choices from groups have been selected.
 - Added a feature to choose whether points will be shown on the points bar/choices.
 - Added a feature to change the scroll position when a choice is selected.
 - Added a feature to set background music when a choice is selected.
 - Added a feature to change the background-color or background-image when a choice is selected.
 - Added a feature to choose whether the filter color will overlay on background-image.
 - Added a feature to manage Private Styles separately for each design feature.
 - Added a feature to manage Private Styles for design groups globally.
 

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
 - Fixed an issue where tags couldn't be used in Show Score.
 - Fixed an issue where Forces Another Choice couldn't be used with multi-select. 
 - Fixed an issue where the choices in hidden rows weren't deselected automatically.
 - Fixed an issue where 'X of these is selected' couldn't be set X to 0.
 - Fixed an issue where words were not resetting with Clean Activated.
 - Fixed an issue where Manage Groups didn't synchronize with the Group settings in Choices.
 - A slight performance improvement
 - Fixed an issue where the browser would freeze when saving project with separate images.
 - Fixed issues with 'Clean Activated' feature.
 - Fixed issues with 'Scores Updated On'.

