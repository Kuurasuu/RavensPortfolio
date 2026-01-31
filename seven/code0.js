gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.idToCallbackMap = new Map();
gdjs.Game_32SceneCode.GDShootButtonObjects1_1final = [];

gdjs.Game_32SceneCode.forEachIndex2 = 0;

gdjs.Game_32SceneCode.forEachObjects2 = [];

gdjs.Game_32SceneCode.forEachTemporary2 = null;

gdjs.Game_32SceneCode.forEachTotalCount2 = 0;

gdjs.Game_32SceneCode.GDPlayerObjects1= [];
gdjs.Game_32SceneCode.GDPlayerObjects2= [];
gdjs.Game_32SceneCode.GDPlayerObjects3= [];
gdjs.Game_32SceneCode.GDPlayerObjects4= [];
gdjs.Game_32SceneCode.GDBackgroundObjects1= [];
gdjs.Game_32SceneCode.GDBackgroundObjects2= [];
gdjs.Game_32SceneCode.GDBackgroundObjects3= [];
gdjs.Game_32SceneCode.GDBackgroundObjects4= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects1= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects2= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects3= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects4= [];
gdjs.Game_32SceneCode.GDMovementJoystickObjects1= [];
gdjs.Game_32SceneCode.GDMovementJoystickObjects2= [];
gdjs.Game_32SceneCode.GDMovementJoystickObjects3= [];
gdjs.Game_32SceneCode.GDMovementJoystickObjects4= [];
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1= [];
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2= [];
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects3= [];
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects4= [];
gdjs.Game_32SceneCode.GDShootButtonObjects1= [];
gdjs.Game_32SceneCode.GDShootButtonObjects2= [];
gdjs.Game_32SceneCode.GDShootButtonObjects3= [];
gdjs.Game_32SceneCode.GDShootButtonObjects4= [];
gdjs.Game_32SceneCode.GDTargetObjects1= [];
gdjs.Game_32SceneCode.GDTargetObjects2= [];
gdjs.Game_32SceneCode.GDTargetObjects3= [];
gdjs.Game_32SceneCode.GDTargetObjects4= [];
gdjs.Game_32SceneCode.GDBulletObjects1= [];
gdjs.Game_32SceneCode.GDBulletObjects2= [];
gdjs.Game_32SceneCode.GDBulletObjects3= [];
gdjs.Game_32SceneCode.GDBulletObjects4= [];
gdjs.Game_32SceneCode.GDEnemyObjects1= [];
gdjs.Game_32SceneCode.GDEnemyObjects2= [];
gdjs.Game_32SceneCode.GDEnemyObjects3= [];
gdjs.Game_32SceneCode.GDEnemyObjects4= [];
gdjs.Game_32SceneCode.GDShooterEnemyObjects1= [];
gdjs.Game_32SceneCode.GDShooterEnemyObjects2= [];
gdjs.Game_32SceneCode.GDShooterEnemyObjects3= [];
gdjs.Game_32SceneCode.GDShooterEnemyObjects4= [];
gdjs.Game_32SceneCode.GDJumperEnemyObjects1= [];
gdjs.Game_32SceneCode.GDJumperEnemyObjects2= [];
gdjs.Game_32SceneCode.GDJumperEnemyObjects3= [];
gdjs.Game_32SceneCode.GDJumperEnemyObjects4= [];
gdjs.Game_32SceneCode.GDSpeederEnemyObjects1= [];
gdjs.Game_32SceneCode.GDSpeederEnemyObjects2= [];
gdjs.Game_32SceneCode.GDSpeederEnemyObjects3= [];
gdjs.Game_32SceneCode.GDSpeederEnemyObjects4= [];
gdjs.Game_32SceneCode.GDSlowEnemyObjects1= [];
gdjs.Game_32SceneCode.GDSlowEnemyObjects2= [];
gdjs.Game_32SceneCode.GDSlowEnemyObjects3= [];
gdjs.Game_32SceneCode.GDSlowEnemyObjects4= [];
gdjs.Game_32SceneCode.GDTeleportingEnemyObjects1= [];
gdjs.Game_32SceneCode.GDTeleportingEnemyObjects2= [];
gdjs.Game_32SceneCode.GDTeleportingEnemyObjects3= [];
gdjs.Game_32SceneCode.GDTeleportingEnemyObjects4= [];
gdjs.Game_32SceneCode.GDPlayerHealthBarObjects1= [];
gdjs.Game_32SceneCode.GDPlayerHealthBarObjects2= [];
gdjs.Game_32SceneCode.GDPlayerHealthBarObjects3= [];
gdjs.Game_32SceneCode.GDPlayerHealthBarObjects4= [];
gdjs.Game_32SceneCode.GDDetectionRangeObjects1= [];
gdjs.Game_32SceneCode.GDDetectionRangeObjects2= [];
gdjs.Game_32SceneCode.GDDetectionRangeObjects3= [];
gdjs.Game_32SceneCode.GDDetectionRangeObjects4= [];


gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.Game_32SceneCode.GDBulletObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Game_32SceneCode.GDBulletObjects1});
gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects2[k] = gdjs.Game_32SceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects2 */
gdjs.Game_32SceneCode.GDBulletObjects2.length = 0;

{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.Game_32SceneCode.GDPlayerObjects2[i].getCenterXInScene()), (gdjs.Game_32SceneCode.GDPlayerObjects2[i].getCenterYInScene()), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBulletObjects2Objects, 180, 500, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("Flippable").isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */
gdjs.Game_32SceneCode.GDBulletObjects1.length = 0;

{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("FireBullet").Fire((gdjs.Game_32SceneCode.GDPlayerObjects1[i].getCenterXInScene()), (gdjs.Game_32SceneCode.GDPlayerObjects1[i].getCenterYInScene()), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBulletObjects1Objects, 0, 500, null);
}
}
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Game_32SceneCode.GDBulletObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTargetObjects1Objects = Hashtable.newFrom({"Target": gdjs.Game_32SceneCode.GDTargetObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Game_32SceneCode.GDBulletObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Game_32SceneCode.GDEnemyObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Game_32SceneCode.GDEnemyObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Game_32SceneCode.GDEnemyObjects2, gdjs.Game_32SceneCode.GDEnemyObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.Game_32SceneCode.GDEnemyObjects3.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDEnemyObjects3[0].getBehavior("Pathfinding").getNextNodeX()) > (( gdjs.Game_32SceneCode.GDEnemyObjects3.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDEnemyObjects3[0].getPointX("")));
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDEnemyObjects3 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects3[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}
}

}


{

gdjs.copyArray(gdjs.Game_32SceneCode.GDEnemyObjects2, gdjs.Game_32SceneCode.GDEnemyObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.Game_32SceneCode.GDEnemyObjects3.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDEnemyObjects3[0].getBehavior("Pathfinding").getNextNodeX()) < (( gdjs.Game_32SceneCode.GDEnemyObjects3.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDEnemyObjects3[0].getPointX("")));
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDEnemyObjects3 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects3[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}
}

}


{

gdjs.copyArray(gdjs.Game_32SceneCode.GDEnemyObjects2, gdjs.Game_32SceneCode.GDEnemyObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.Game_32SceneCode.GDEnemyObjects3.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDEnemyObjects3[0].getBehavior("Pathfinding").getNextNodeY()) < (( gdjs.Game_32SceneCode.GDEnemyObjects3.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDEnemyObjects3[0].getPointY("")) - 20);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDEnemyObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDEnemyObjects3[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDEnemyObjects3[k] = gdjs.Game_32SceneCode.GDEnemyObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDEnemyObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDEnemyObjects3 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects3[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDDetectionRangeObjects1Objects = Hashtable.newFrom({"DetectionRange": gdjs.Game_32SceneCode.GDDetectionRangeObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDDetectionRangeObjects1Objects = Hashtable.newFrom({"DetectionRange": gdjs.Game_32SceneCode.GDDetectionRangeObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.eventsList2 = function(runtimeScene) {

{

gdjs.Game_32SceneCode.GDShootButtonObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Game_32SceneCode.GDShootButtonObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ShootButton"), gdjs.Game_32SceneCode.GDShootButtonObjects2);
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDShootButtonObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDShootButtonObjects2[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_1 = true;
        gdjs.Game_32SceneCode.GDShootButtonObjects2[k] = gdjs.Game_32SceneCode.GDShootButtonObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDShootButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDShootButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDShootButtonObjects1_1final.indexOf(gdjs.Game_32SceneCode.GDShootButtonObjects2[j]) === -1 )
            gdjs.Game_32SceneCode.GDShootButtonObjects1_1final.push(gdjs.Game_32SceneCode.GDShootButtonObjects2[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "c");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.Game_32SceneCode.GDShootButtonObjects1_1final, gdjs.Game_32SceneCode.GDShootButtonObjects1);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Game_32SceneCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Target"), gdjs.Game_32SceneCode.GDTargetObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBulletObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTargetObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDBulletObjects1 */
/* Reuse gdjs.Game_32SceneCode.GDTargetObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTargetObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTargetObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerHealthBar"), gdjs.Game_32SceneCode.GDPlayerHealthBarObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerHealthBarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerHealthBarObjects1[i].SetMaxValue((( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getBehavior("Health").MaxHealth(null)), null);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerHealthBar"), gdjs.Game_32SceneCode.GDPlayerHealthBarObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerHealthBarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerHealthBarObjects1[i].SetValue((( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getBehavior("Health").Health(null)), null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerHealthBarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerHealthBarObjects1[i].setX(10);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerHealthBarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerHealthBarObjects1[i].setY(10);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerHealthBarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerHealthBarObjects1[i].setLayer("UI");
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getPointX("")), (( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getPointY("")));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Game_32SceneCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBulletObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDBulletObjects1 */
/* Reuse gdjs.Game_32SceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects1[i].getBehavior("Health").Hit(60, true, true, null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects1[i].getBehavior("FlashColor").Flash(0.5, "255;37;37", null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDEnemyObjects1[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDEnemyObjects1[k] = gdjs.Game_32SceneCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDEnemyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("Health").Hit(2, true, true, null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("FlashColor").Flash(0.5, "255;0;0", null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects1);

for (gdjs.Game_32SceneCode.forEachIndex2 = 0;gdjs.Game_32SceneCode.forEachIndex2 < gdjs.Game_32SceneCode.GDEnemyObjects1.length;++gdjs.Game_32SceneCode.forEachIndex2) {
gdjs.Game_32SceneCode.GDEnemyObjects2.length = 0;


gdjs.Game_32SceneCode.forEachTemporary2 = gdjs.Game_32SceneCode.GDEnemyObjects1[gdjs.Game_32SceneCode.forEachIndex2];
gdjs.Game_32SceneCode.GDEnemyObjects2.push(gdjs.Game_32SceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.Game_32SceneCode.eventsList1(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("Health").Health(null) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("HorizontalDash").SimulateDashKey(null);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects1[i].getBehavior("Pathfinding").setMaxSpeed(50);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects1[i].getBehavior("Pathfinding").setAcceleration(150);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DetectionRange"), gdjs.Game_32SceneCode.GDDetectionRangeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDDetectionRangeObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDDetectionRangeObjects1[i].getBehavior("Opacity").getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDDetectionRangeObjects1[k] = gdjs.Game_32SceneCode.GDDetectionRangeObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDDetectionRangeObjects1.length = k;
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("DetectionRange"), gdjs.Game_32SceneCode.GDDetectionRangeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDDetectionRangeObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDetectionRangeObjects1[i].setPosition((( gdjs.Game_32SceneCode.GDEnemyObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDEnemyObjects1[0].getPointX("")),(( gdjs.Game_32SceneCode.GDEnemyObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDEnemyObjects1[0].getPointY("")));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DetectionRange"), gdjs.Game_32SceneCode.GDDetectionRangeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDDetectionRangeObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDDetectionRangeObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, true, runtimeScene, false);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects1[i].valuePush(gdjs.Game_32SceneCode.GDEnemyObjects1[i].getVariables().getFromIndex(0), 1);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects1[i].valuePush(gdjs.Game_32SceneCode.GDEnemyObjects1[i].getVariables().getFromIndex(0), 0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDEnemyObjects1[i].getVariableNumber(gdjs.Game_32SceneCode.GDEnemyObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDEnemyObjects1[k] = gdjs.Game_32SceneCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDEnemyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDEnemyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getPointX("")), (( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getPointY("")));
}
}
}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects4.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects4.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects4.length = 0;
gdjs.Game_32SceneCode.GDMovementJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDMovementJoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDMovementJoystickObjects3.length = 0;
gdjs.Game_32SceneCode.GDMovementJoystickObjects4.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects4.length = 0;
gdjs.Game_32SceneCode.GDShootButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDShootButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDShootButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDShootButtonObjects4.length = 0;
gdjs.Game_32SceneCode.GDTargetObjects1.length = 0;
gdjs.Game_32SceneCode.GDTargetObjects2.length = 0;
gdjs.Game_32SceneCode.GDTargetObjects3.length = 0;
gdjs.Game_32SceneCode.GDTargetObjects4.length = 0;
gdjs.Game_32SceneCode.GDBulletObjects1.length = 0;
gdjs.Game_32SceneCode.GDBulletObjects2.length = 0;
gdjs.Game_32SceneCode.GDBulletObjects3.length = 0;
gdjs.Game_32SceneCode.GDBulletObjects4.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects1.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects2.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects3.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects4.length = 0;
gdjs.Game_32SceneCode.GDShooterEnemyObjects1.length = 0;
gdjs.Game_32SceneCode.GDShooterEnemyObjects2.length = 0;
gdjs.Game_32SceneCode.GDShooterEnemyObjects3.length = 0;
gdjs.Game_32SceneCode.GDShooterEnemyObjects4.length = 0;
gdjs.Game_32SceneCode.GDJumperEnemyObjects1.length = 0;
gdjs.Game_32SceneCode.GDJumperEnemyObjects2.length = 0;
gdjs.Game_32SceneCode.GDJumperEnemyObjects3.length = 0;
gdjs.Game_32SceneCode.GDJumperEnemyObjects4.length = 0;
gdjs.Game_32SceneCode.GDSpeederEnemyObjects1.length = 0;
gdjs.Game_32SceneCode.GDSpeederEnemyObjects2.length = 0;
gdjs.Game_32SceneCode.GDSpeederEnemyObjects3.length = 0;
gdjs.Game_32SceneCode.GDSpeederEnemyObjects4.length = 0;
gdjs.Game_32SceneCode.GDSlowEnemyObjects1.length = 0;
gdjs.Game_32SceneCode.GDSlowEnemyObjects2.length = 0;
gdjs.Game_32SceneCode.GDSlowEnemyObjects3.length = 0;
gdjs.Game_32SceneCode.GDSlowEnemyObjects4.length = 0;
gdjs.Game_32SceneCode.GDTeleportingEnemyObjects1.length = 0;
gdjs.Game_32SceneCode.GDTeleportingEnemyObjects2.length = 0;
gdjs.Game_32SceneCode.GDTeleportingEnemyObjects3.length = 0;
gdjs.Game_32SceneCode.GDTeleportingEnemyObjects4.length = 0;
gdjs.Game_32SceneCode.GDPlayerHealthBarObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerHealthBarObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerHealthBarObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayerHealthBarObjects4.length = 0;
gdjs.Game_32SceneCode.GDDetectionRangeObjects1.length = 0;
gdjs.Game_32SceneCode.GDDetectionRangeObjects2.length = 0;
gdjs.Game_32SceneCode.GDDetectionRangeObjects3.length = 0;
gdjs.Game_32SceneCode.GDDetectionRangeObjects4.length = 0;

gdjs.Game_32SceneCode.eventsList2(runtimeScene);
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects4.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects4.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects4.length = 0;
gdjs.Game_32SceneCode.GDMovementJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDMovementJoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDMovementJoystickObjects3.length = 0;
gdjs.Game_32SceneCode.GDMovementJoystickObjects4.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects4.length = 0;
gdjs.Game_32SceneCode.GDShootButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDShootButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDShootButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDShootButtonObjects4.length = 0;
gdjs.Game_32SceneCode.GDTargetObjects1.length = 0;
gdjs.Game_32SceneCode.GDTargetObjects2.length = 0;
gdjs.Game_32SceneCode.GDTargetObjects3.length = 0;
gdjs.Game_32SceneCode.GDTargetObjects4.length = 0;
gdjs.Game_32SceneCode.GDBulletObjects1.length = 0;
gdjs.Game_32SceneCode.GDBulletObjects2.length = 0;
gdjs.Game_32SceneCode.GDBulletObjects3.length = 0;
gdjs.Game_32SceneCode.GDBulletObjects4.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects1.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects2.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects3.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects4.length = 0;
gdjs.Game_32SceneCode.GDShooterEnemyObjects1.length = 0;
gdjs.Game_32SceneCode.GDShooterEnemyObjects2.length = 0;
gdjs.Game_32SceneCode.GDShooterEnemyObjects3.length = 0;
gdjs.Game_32SceneCode.GDShooterEnemyObjects4.length = 0;
gdjs.Game_32SceneCode.GDJumperEnemyObjects1.length = 0;
gdjs.Game_32SceneCode.GDJumperEnemyObjects2.length = 0;
gdjs.Game_32SceneCode.GDJumperEnemyObjects3.length = 0;
gdjs.Game_32SceneCode.GDJumperEnemyObjects4.length = 0;
gdjs.Game_32SceneCode.GDSpeederEnemyObjects1.length = 0;
gdjs.Game_32SceneCode.GDSpeederEnemyObjects2.length = 0;
gdjs.Game_32SceneCode.GDSpeederEnemyObjects3.length = 0;
gdjs.Game_32SceneCode.GDSpeederEnemyObjects4.length = 0;
gdjs.Game_32SceneCode.GDSlowEnemyObjects1.length = 0;
gdjs.Game_32SceneCode.GDSlowEnemyObjects2.length = 0;
gdjs.Game_32SceneCode.GDSlowEnemyObjects3.length = 0;
gdjs.Game_32SceneCode.GDSlowEnemyObjects4.length = 0;
gdjs.Game_32SceneCode.GDTeleportingEnemyObjects1.length = 0;
gdjs.Game_32SceneCode.GDTeleportingEnemyObjects2.length = 0;
gdjs.Game_32SceneCode.GDTeleportingEnemyObjects3.length = 0;
gdjs.Game_32SceneCode.GDTeleportingEnemyObjects4.length = 0;
gdjs.Game_32SceneCode.GDPlayerHealthBarObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerHealthBarObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerHealthBarObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayerHealthBarObjects4.length = 0;
gdjs.Game_32SceneCode.GDDetectionRangeObjects1.length = 0;
gdjs.Game_32SceneCode.GDDetectionRangeObjects2.length = 0;
gdjs.Game_32SceneCode.GDDetectionRangeObjects3.length = 0;
gdjs.Game_32SceneCode.GDDetectionRangeObjects4.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
