# starfinder-roll20-conditions

A Roll20 script for Starfinder (though it can work with any game having conditions with a little customization).

=================================

PREREQUISITES:

This script uses a custom Token Marker set. You can create your own (https://wiki.roll20.net/Token_Markers#Creating_Token_Marker_Sets) or use the existing one. HOWEVER, the names of each token should correspond to the key for the condition it represents. 

Thus, the token image named "asleep" (represented by a cloud of Zs) in the custom token set will have a line like this in the conditions constant at the beginning of the script:

    "asleep":"You are sleeping and helpless. While asleep, you take a –10 penalty to Perception checks to notice anything. If you succeed at a Perception check to notice something despite the penalty, you automatically awaken. You are also awoken if you are slapped or wounded. An ally can wake you as a standard action.",

If you wish to create other conditions, you will need to modify the 


=================================

TODO LIST

1. Clean up the code. This was just me playing around and needs a lot of streamlining.
2. Remove the initial constant and replace it with a JSON file.
3. Find an easy way to decrement or increment token numbers for the condition (PF2 potential upgrade?).
4. Create easy to read public domain marker set to distribute with this.
5. Add various affliction conditions, movement conditions (flight height, burrowing depth, etc.), player action conditions (get 'em, etc.).
6. Automated test suite?
7. Allow some tokens to increment or decrement based on initiative tracker turns?

=================================

USER GUIDE

To list all token markers on the current Roll20 table, type this command from the command line or create a macro with it:

  !markernames

To list all conditions on the currently selected marker, type this command from the command line or create a macro with it:

  !listmarkers
  
To add a condition to the currently selected marker, type this command from the command line or create a macro with it:

  !togglemarker condition number

where "condition" corresponds to the appropriate token marker and condition key and "number" is an optional one-digit integer value that will be added to the token.

To remove an existing condition token from the currently selected marker, type this command from the command line or create a macro with it:

  !togglemarker condition number

where "condition" corresponds to the appropriate token marker and condition key. Note that if this condition is not already applied to the selected token, it will be added.

To remove all non-color markers from the currently selected token: 

  !clearmarkers

=================================

CREDITS

Script by Jeff Barnes based heavily on the Roll20 wiki entry: https://wiki.roll20.net/API:Token_Markers .

Freely you have received; freely give. No rights reserved. Have fun and let me know what cool changes you make to this.
  
