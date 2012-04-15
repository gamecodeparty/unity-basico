#pragma strict

var grausPorSegundo:float = 45;

private var conversao:float = Mathf.PI / 180;

function Update () {
	var radianos = grausPorSegundo * conversao * Time.deltaTime;
	transform.RotateAroundLocal(Vector3.up, radianos);
}