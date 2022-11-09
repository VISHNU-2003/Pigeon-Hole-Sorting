/** For Page Redirecting **/
function redirect(url)
    {
        window.location.href = url;    
    }
/*
For Changing Unsorted Label text
*/
function changeLabel(){
    
    var number = document.getElementById("number-input").value;
    document.getElementById("number-input").value='';
    var inputText = (document.getElementById('input-label').innerHTML + " " +number)
    document.getElementById('input-label').innerHTML= inputText;
}

/*Sorting Function*/
function sort(){
    
    var inputArray = document.getElementById('input-label').innerHTML.split(" ");
    // Storing Only Numerical Values
    var onlyNumbers = inputArray.filter(value => /^-?\d+\.?\d*$/.test(value));
    
    var changeLabelText = document.getElementById('input-label').innerHTML;
    if(changeLabelText.length<=0){
        
        alert("Please Submit before proceeding to Sort");
    }
    //Checking Numerical Values exist or not
    if(onlyNumbers.length <=0){
        document.getElementById('input-label').innerHTML = 'Unsorted Numbers:';
        alert("Please Submit Correct Values to Sort");
        return;
    }
    //Declaring array to store Parsed Values
    var array = new Array();
    for(var i=0;i<onlyNumbers.length;i++){
        array[i] = parseInt(onlyNumbers[i]);
    }
    
    pigeonHoleSort(array);
    var sortedText = "<span style='color:red'>Ignoring AlphaNumeric Values</span> <br><br>Sorted Numbers:";
    //Traversing Sorted Array and appending values to Sorted Text Label
    for(var s=0;s<array.length;s++){
        sortedText +=  (" " +array[s]);
    }
    
    document.getElementById('sorted-label').innerHTML= sortedText;
    
    
}

function pigeonHoleSort(nums) {
  let min = nums[0]
  let max = nums[0]

  //For Getting Min And Max Values
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {max = nums[i]}
    if (nums[i] < min) {min = nums[i]}
  }


  const range = max - min + 1
  const pigeonHole = Array(range).fill(0)

  for (let i = 0; i < nums.length; i++) {
    pigeonHole[nums[i] - min]++
  }

  let index = 0

  for (let j = 0; j < range; j++) {
    while (pigeonHole[j]-- > 0) {
      nums[index++] = j + min
    }
  }
  return nums
}

/*Function to Clear Existing Values*/
function clearContent(){
        document.getElementById('input-label').innerHTML = 'Unsorted Numbers:';
        document.getElementById('sorted-label').innerHTML= '';

}


/*-----------------------------------Ends ------------------------------------*/

