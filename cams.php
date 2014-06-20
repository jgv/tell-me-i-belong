<?php

header('Access-Control-Allow-Origin: *');

$id = htmlspecialchars($_GET["id"]);
$url = "http://207.251.86.238/cctv" . $id . ".jpg" . "?math=" . time();
$newImage = $url;
$mimeType = image_type_to_mime_type(exif_imagetype($newImage));
if ( $mimeType == "image/gif" ) {
  echo json_encode( false );
} else {
  echo json_encode( true );
}

?>
