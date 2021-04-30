const wakeUp = () => console.log('Acordando!!');
// wakeUp();

const breakfast = () => console.log('Bora tomar café!!');
// breakfast();

const goToBed = () => console.log('Partiu dormir!!');
// goToBed();

const doingThings = (action) => action();
doingThings(goToBed);