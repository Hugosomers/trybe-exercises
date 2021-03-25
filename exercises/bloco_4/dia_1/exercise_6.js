let chessPiece = "knight";

switch(chessPiece.toLowerCase() && chessPiece.toUpperCase()){
  case "king":
    console.log("One square in any direction");
    break;
  case "queen":
    console.log("Vertically, horizontally, diagonally");
    break;
  case "bishop":
    console.log("diagonally");
    break;
  case "rook":
    console.log("Horizontally, vertically");
    break;
  case "KNIGHT":
    console.log("L");
    break;
  case "pawn":
    console.log("Single square vertically");
    break;
  default:
    console.log("Erro")            
}