const conditions = {
    "asleep":"You are sleeping and helpless. While asleep, you take a –10 penalty to Perception checks to notice anything. If you succeed at a Perception check to notice something despite the penalty, you automatically awaken. You are also awoken if you are slapped or wounded. An ally can wake you as a standard action.",
    "bleeding":"You take the listed amount of damage at the beginning of your turn each round until this condition ends. Your bleeding can be stopped with a successful DC 15 Medicine check as a standard action, or through the application of any ability that restores Hit Points. If you take two or more bleed effects, you take only the damage from the worst effect.",
    "blinded":"You cannot see. You are flat-footed and take a –4 penalty to most Strength– and Dexterity-based skill checks and to opposed Perception skill checks. All checks and activities that rely on vision (such as reading and Perception checks based on sight) automatically fail. You can’t observe other creatures, which means (among other things) that you treat all creatures as having total concealment (50% miss chance). You must succeed at a DC 10 Acrobatics skill check to move faster than half speed. If you fail this check, you fall prone. Characters who remain blinded for a long time grow accustomed to these drawbacks and can overcome some of them. Creatures that become blinded but that have a precise sense other than vision still automatically fail all checks and activities relying on vision, but they suffer none of the other effects.",
    "burning":"You are on fire. As long as you have this condition, at the start of your turn each round before you take any actions (or attempt the Reflex saving throw described below), you take the listed amount of damage as fire damage (or 1d6 fire damage, if no amount is listed in the effect that causes burning). Fire damage from multiple sources that inflict the burning condition is cumulative.\n\nAt the end of each round you are burning, you can attempt a Reflex saving throw to remove this condition. The DC of this saving throw is equal to 10 + the amount of fire damage you took this round from the burning condition. If you succeed at this saving throw, you lose the burning condition. You can attempt a new saving throw each round you have this condition, and you receive a +2 bonus for each previous saving throw you’ve attempted in consecutive rounds.\n\nAYou can also automatically end this condition by jumping into enough water to douse yourself. If you don’t have enough water on hand, you can spend a full action to roll on the ground or otherwise smother the fire to attempt a new saving throw with a +4 bonus (plus any bonuses from previously failed consecutive attempts) to end the condition.",
    "confused":"You are mentally befuddled and can’t act normally. You can’t tell the difference between ally and foe, and thus you treat all creatures as enemies, even your closest friends and family, if applicable. An ally who wishes to cast a beneficial spell on you with a range of touch must succeed at an attack roll against your Energy Armor Class, since you cannot be considered a willing target. If you are attacked while you’re confused, you always attack the creature that last attacked you until that creature is dead or out of sight, unless it is otherwise impossible for you to attack it that round. While confused, you can’t make attacks of opportunity against any creature or thing that you aren’t already committed to attacking.\n\nIf you are not devoted to attacking a target, roll on the following table at the beginning of your turn each round to see what you do in that round.\n\nIf you can’t carry out the indicated action, you do nothing but babble incoherently. Attackers are not at any special advantage when attacking you.}}\n\n&{template:default} {{name=Behavior}}{{1-25= Act normally.}}{{26-50= Do nothing but babble incoherently.}}{{51-75= Deal 1d8 + Str modifier damage to self with item in hand.}}{{76-100= Attack nearest creature.",
    "cower":"You’re frozen with fear. You’re flat-footed and can take no actions.",
    "dazed":"You are unable to act normally. You can take no actions but have no penalty to your AC. A dazed condition typically lasts 1 round.",
    "dazzled":"You are unable to see well because of overstimulation of your eyes. You take a –1 penalty to attack rolls and sight-based Perception checks.",
    "dead":"{You are dead when you have 0 Hit Points, are not stable, and have no Resolve Points remaining but would lose RP due to dying or taking damage while dying. (See Injury and Death beginning on page 250 for more information.) You can also die from ability damage, ability drain, or negative levels (see page 252), or by taking massive damage (see page 250).\n\nWhen you are dead, your soul leaves your body and you are unable to act in any way. You can’t benefit from normal or magical healing, but you can be restored to life via magic or technology capable of such a feat. Your dead body decays normally unless it is preserved, but anything that restores you to life also restores your body either to full health or to its condition at the time of death (depending on the spell or device that’s reviving you). Either way, you need not worry about decomposition, rigor mortis, and other conditions that affect dead bodies after you are resurrected.",
    "deafened":"You can’t hear. You take a –4 penalty to initiative checks and opposed Perception checks, and you automatically fail Perception checks based on sound. Characters who remain deafened for a long time grow accustomed to these drawbacks and can overcome some of them.",
    "dying":"A dying creature is unconscious and near death. Creatures at 0 Hit Points that have not stabilized are dying. A dying creature can take no actions and loses 1 Resolve Point each round at the end of its turn unless it is stabilized. A dying creature can spend one-quarter of it's maximum RP (minimum 1 RP, maximum 3 RP) to stabilize and can then spend another RP in a subsequent round to gain 1 Hit Point and stay in the fight. Stabilizing or being healed above 0 Hit Points ends the dying condition, as does death. See Injury and Death on page 250 for more information.",
    "encumbered":"All of your speeds are reduced by 10 feet, your maximum Dexterity bonus to your Armor Class is reduced to +2, and you take a –5 penalty to Strength- and Dexterity-based checks (or you take your armor’s armor check penalty, whichever is worse).",
    "entangled":"You are ensnared. Being entangled impedes your movement but does not entirely prevent you from moving unless the bonds are anchored to an immobile object or tethered by an opposing force. You move at half speed, you cannot run or charge, and you take a –2 penalty to your AC, attack rolls, Reflex saving throws, initiative checks, and Dexterity-based skill and ability checks.",
    "exhausted":"You move at half speed, you can’t run or charge, and you take a –3 penalty to your Armor Class, attack rolls, melee damage rolls, thrown weapon damage rolls, Reflex saving throws, initiative checks, and Strength- and Dexterity-based skill and ability checks. The amount of bulk you can carry without becoming encumbered is reduced by 3. After 1 hour of complete rest, you instead become fatigued.",
    "fascinated":"You are entranced. While you have the fascinated condition, you stand or sit quietly, taking no actions other than to pay attention to the fascinating effect, for as long as the effect lasts. You take a –4 penalty to skill checks made passively in response to others’ actions, such as Perception checks. Any potential threat, such as a hostile creature approaching, grants you a new saving throw against the fascinating effect. Any obvious threat, such as someone drawing a weapon, casting a spell, or aiming a ranged weapon at you, automatically ends the condition. An ally can shake you free of the effect and end this condition as a standard action.",
    "fatigued":"You can neither run nor charge, and you take a –1 penalty to your Armor Class, attack rolls, melee damage rolls, Reflex saving throws, initiative checks, and Strength- and Dexterity-based skill and ability checks. The amount of bulk you can carry without becoming encumbered is reduced by 1. If you are fatigued, doing an activity that would normally cause fatigue causes you to become exhausted instead. After 8 hours of complete rest, you are no longer fatigued.",
    "flatfooted":"At the start of a combat, if you are surprised, you are flat-footed until you become aware of combat and have had a chance to act. Many other effects can cause you to become flat-footed. You take a –2 penalty to your AC and cannot take reactions while flat-footed.",
    "frightened":"You flee from the source of your fear as best you can. If you are unable to flee, you can instead fight. You take a –2 penalty to ability checks, attack rolls, saving throws, and skill checks. You can use special abilities, including spells, to flee; indeed, you must use such means if they are the only way you have to escape while you are frightened. If you are already frightened and become subject to an additional effect that would cause you to be frightened, the duration of the frightened condition increases by the duration of the second effect.",
    "grappled":"You are restrained by a creature, effect, or trap. You can’t move, and you take a –2 penalty to your Armor Class, attack rolls, Reflex saving throws, initiative checks, and Dexterity-based skill and ability checks, except those made to grapple your opponent in turn or to escape a grapple (see Grapple on page 246). In addition, you can’t take actions that require two hands (or other limbs) to perform. You can’t make attacks of opportunity.\n\nYou can’t use Stealth to hide from the creature grappling you, even if a special ability allows you to hide when you normally couldn’t. If you become invisible, through a spell or other ability, you gain a +2 circumstance bonus to your check to escape being grappled, but you receive no other benefit.",
    "helpless":"You are bound, sleeping, unconscious, or otherwise completely at an opponent’s mercy. You are treated as having a Dexterity of 0 (making your Dexterity modifier –5), and melee attacks against you gain an additional +4 bonus (equivalent to attacking a prone target). Ranged attacks get no special bonus against you.",
    "invisible":"If you are invisible or benefit from total concealment, you gain a +40 bonus to your Stealth check as long as you remain immobile. You are considered immobile if it is your turn and you have not yet moved or if you have not moved since the start of your last turn. If you are invisible but not immobile, you instead gain a +20 bonus to your Stealth check. Typically, a creature cannot attack you if you are invisible or have total concealment unless the creature pinpoints you with a successful Perception check. (Invisible creatures can still be heard, smelled, and felt, and might do something to make themselves known to those who succeed at Perception checks; see Invisible on page 264 in Chapter 8.) Even then, the attacking creature has a 50% miss chance against the pinpointed creature.",
    "nauseated":"You are experiencing stomach distress. You can’t attack, cast spells, concentrate on spells, or do anything else requiring attention. The only action you can take is a single move action per turn.",
    "off-kilter":"You are disoriented and floating in zero gravity. You can’t take move actions to move your speed, crawl, or take a guarded step. You are flat-footed and take a –2 penalty to attack rolls.\n\nYou must use a method of propulsion to right yourself or grab a stabilizing object such as a wall or ladder (usually as a move action) in order to end this condition. See Zero Gravity on page 402 for more information.",
    "off-target":"Your battle concentration is thrown off. You take a –2 penalty to attack rolls while off-target.",
    "overburdened":"All of your speeds are reduced to 5 feet, your maximum Dexterity bonus to your Armor Class is reduced to +0, and you take a –5 penalty to Strength- and Dexterity-based checks (or your armor’s armor check penalty, whichever is worse).",
    "panicked":"You drop everything you are holding and flee at top speed along a random path away from the source of your fear, as well as from any other dangers you encounter. You can’t take any other actions. In addition, you take a –2 penalty to all ability checks, saving throws, and skill checks. If cornered, you cower and don’t attack, typically using the total defense action in combat and nothing else. You can use special abilities, including spells, to flee; indeed, you must use such means if they are the only way you have to escape.",
    "paralyzed":"You are almost entirely frozen in place and unable to move your body except to squirm slightly, move your eyes, and so on. You aren’t helpless, though you are treated as having a Dexterity modifier of –5. You can take purely mental actions but no physical actions. If you are flying in the air when you become paralyzed and your flight is dependent on physical means (such as wings), you fall. If you are swimming when you become paralyzed, you could drown (see Suffocation and Drowning on page 404). A creature can move through a space you occupy, whether or not it is your ally. Each square you occupy, however, counts as 2 squares to move through.",
    "pinned":"You are tightly bound and can take few actions. While you are pinned, you can’t move and are flat-footed. You also take an additional –4 penalty to your Armor Class, attack rolls, Reflex saving throws, initiative checks, and Dexterity-based skill and ability checks (these penalties replace those from the grappled condition and also apply to attempts to grapple your opponent or free yourself; see Grapple on page 246). You are limited in the actions that you can take. You cannot take any action that requires the use of any of your limbs, but you can always attempt to free yourself, usually through an attack roll or Acrobatics check. You can’t make attacks of opportunity while you are pinned, but you can still take verbal and mental actions, such as spellcasting.",
    "prone":"You are lying on the ground. You take a –4 penalty to melee attack rolls. You gain a +4 bonus to your Armor Class against ranged attacks, but you take a –4 penalty to your Armor Class against melee attacks. Standing up from prone is a move action.",
    "shaken":"You take a –2 penalty to attack rolls, saving throws, skill checks, and ability checks while you have the shaken condition. If you are already shaken and then become subject to an additional effect that would cause you to be shaken, the duration of the shaken condition increases by the duration of the second effect.",
    "sickened":"You take a –2 penalty to attack rolls, weapon damage rolls, saving throws, skill checks, and ability checks.",
    "stable":"If you were dying but spent Resolve Points to stabilize (see Using Resolve Points beginning on page 250 in Injury and Death), or if you received healing from an ally, you are stable. You are no longer dying, but you are still unconscious.",
    "staggered":"You can take a single move action or standard action each round, but not both, nor can you take full actions. You can still take swift actions, but not reactions.",
    "stunned":"You drop everything you are holding, you can’t take actions, and you are flat-footed.",
    "unconscious":"You are knocked out and helpless. Unconsciousness can result from having 0 Hit Points.",
    "tenaciousswarm": "When a creature fails a Fortitude save against your malignant mist ability, they become infested with short-lived nanites that continue burrowing into their body. At the end of the infested creature\’s turn, it takes piercing damage equal to your malignant mist ability’s minimum damage plus your Constitution modifier, after which it attempts a new Fortitude save to end the effect. This effect ends automatically after a number of rounds equal to your Constitution modifier. A creature can only be affected by a single tenacious swarm at a time."
};
const isColor = function(markerName) {
    return (markerName.startsWith("red") || markerName.startsWith("blue") || markerName.startsWith("green") 
        || markerName.startsWith("brown") || markerName.startsWith("purple") || markerName.startsWith("pink") 
        || markerName.startsWith("yellow"));
}
const getChatMessageFromTokenMarkers = markers => {
    let chatMessage = '';
    _.each(markers, marker => {
        chatMessage += `<p><img src='${marker.url}'> ${marker.id}: ${marker.name}</p>`;
    });
    return chatMessage;
};
const getMarkerId = markerName => {
    const markers = JSON.parse(Campaign().get("token_markers"));
    let markerId = '';
    _.each(markers, marker => {
        if(marker.name.toLowerCase() === markerName) {
            markerId = marker.id;
        };
    });
    return markerId;
};
    
on("chat:message", msg => {
    const tokenMarkers = JSON.parse(Campaign().get("token_markers"));
    const userCommand = msg.content.split(" ")[0].toLowerCase();
    
    // lists all valid markers; mostly for debugging purposes
    if(userCommand === '!markernames') {
        let chatMessage = getChatMessageFromTokenMarkers(tokenMarkers);
        sendChat("Token Markers", chatMessage);
    // toggle a condition marker on or off for token
    } else if(userCommand === '!togglemarker') {
        if (!msg.selected && msg.selected[0]._type == "graphic") return;
        const markerName = msg.content.split(" ")[1].toLowerCase();
        obj = getObj(msg.selected[0]._type, msg.selected[0]._id);
        let statusList = obj.get("statusmarkers");
        const alreadyHasStatus = statusList.includes(markerName);
        currentMarkers = statusList.split(',');
        const markerId = getMarkerId(markerName);
        if (alreadyHasStatus) {
            // remove condition
            let index = -1;
            let count = 0;
            _.each(currentMarkers, marker => {
                if(marker.toLowerCase().startsWith(markerName)) {
                    index = count;
                }
                count++;
            });
            if (index > -1) {
                currentMarkers.splice(index, 1);
                obj.set("statusmarkers", currentMarkers.join(','));
            } else {
                log("ERROR: not found " + markerName);
            }
        } else {
            // add new condition
            if (statusList === "") {
                statusList = markerName+'::'+markerId;
            } else {
                statusList += "," + markerName+'::'+markerId
            }

            // if a counter is appended, add it to the token
            const counter = msg.content.split(" ")[2];
            if (counter && counter > 0) {
                statusList += "@" + counter;
            }
            obj.set("statusmarkers", statusList);
            
            // Show condition text in table chat
            let conditionName = markerName.charAt(0).toUpperCase() + markerName.slice(1);
            const conditionText = conditions[markerName];
            if (conditionText) {
                sendChat("Condition", "&{template:default} {{name="+conditionName+"}} {{"+conditionText+"}}");
            }
        }
    // clear conditions for token
    } else if(userCommand === '!clearmarkers') {
        obj = getObj(msg.selected[0]._type, msg.selected[0]._id);
        let message = "";
        currentMarkers = obj.get("statusmarkers");
        if (currentMarkers !== "") {
            markers = currentMarkers.split(",");
            for (var i=0; i < markers.length; i++) {
                let markerName = markers[i].split("::")[0];
                if (isColor(markerName)) {
                    message += markerName + ","
                } else {
                    let conditionName = markerName.charAt(0).toUpperCase() + markerName.slice(1);
                    sendChat("Removing Condition", conditionName); 
                }
            }
            obj.set("statusmarkers", message.substring(0, message.length-1));
        }
    // show all conditions for token
    } else if(userCommand === '!gettokenmarkers') {
        if (!msg.selected) return;
        if (msg.selected[0]._type !== "graphic") return;
        obj = getObj(msg.selected[0]._type, msg.selected[0]._id);
        currentMarkers = obj.get("statusmarkers");
        if (currentMarkers !== "") {
            markers = currentMarkers.split(",");
            for (var i=0; i < markers.length; i++) {
                let markerName = markers[i].split("::")[0];
                if (!isColor(markerName)) {
                    let conditionName = markerName.charAt(0).toUpperCase() + markerName.slice(1);
                    const conditionText = conditions[markerName];
                    if (conditionText) {
                        sendChat("Current Conditions", "&{template:default} {{name="+conditionName+"}} {{"+conditionText+"}}");
                    } else { 
                        sendChat("Error!", markerName); 
                    }
                }
            }
        }
    }
});
