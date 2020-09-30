import * as THREE from './js/three.module.js';

var camera, scene, renderer;
var geometry, material, mesh;
var line2, line, lineRight, text
var changeColor = true;
init();
animate();

function init() {

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
    camera.position.set(0, 20, 80);
    camera.lookAt(0, 10, 10);

    text = new THREE.TextGeometry(text, );

    scene = new THREE.Scene();

    var material = new THREE.LineBasicMaterial({
        color: 0xFFFFFF
    });
    var points = [];
    /* x y z */
    points.push(new THREE.Vector3(-20, 0, 0));
    points.push(new THREE.Vector3(0, 20, 0));
    points.push(new THREE.Vector3(20, 0, 0));
    points.push(new THREE.Vector3(-20, 0, 0));

    var points2 = [];
    points2.push(new THREE.Vector3(0, 100, 0));
    points2.push(new THREE.Vector3(0, -200, 0));


    var geometry = new THREE.BufferGeometry().setFromPoints(points);
    var geometryOneLine = new THREE.BufferGeometry().setFromPoints(points2);

    line = new THREE.Line(geometry, material);
    line.rotation.z = 10
    line.rotation.x = 20
    line.rotation.y = 0

    line2 = new THREE.Line(geometry, material);
    line2.rotation.z = 10
    line2.rotation.x = 20
    line2.rotation.y = 10
    line2.position.y = 20

    lineRight = new THREE.Line(geometryOneLine, material);
    lineRight.rotation.z = 50
    //lineRight.position.x = -50



    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    scene.add(line, line2, lineRight);

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

function animate() {

    requestAnimationFrame(animate);

    //line2.rotation.x += 0.01;
    line2.rotation.z += 0.02;
    line.rotation.z += 0.02;
    renderer.render(scene, camera);

}

function changeBack() {

    if (changeColor == true) {

        scene.background = new THREE.Color(0xff0000);
        line.material.color.set(0x000000)


        changeColor = false
    } else {
        scene.background = new THREE.Color(0x000000);

        line.material.color.set(0xFFFFFF)

        changeColor = true

    }
    //renderer.render(scene, camera);
}

document.querySelector('img').addEventListener('click', () => {
    document.querySelector('img').classList.toggle('transformOnClick')
    changeBack()
})