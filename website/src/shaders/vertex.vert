precision mediump float;

  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec2 u_scale;
  uniform vec2 u_mouse;
  uniform float u_zpos;

  varying vec2 vUv;
  varying float transfer;
  varying float value;

  void main() {
    vUv = uv;
    vec3 pos = vec3(position.x, position.y, position.z);
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(pos, 1.0);
  }