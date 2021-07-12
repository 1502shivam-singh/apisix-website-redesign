  precision mediump float;

  uniform vec2 u_resolution;
  uniform float u_time;
  uniform vec2 u_mouse;
  uniform vec2 u_fragMouse;

  varying vec2 vUv;
  varying float transfer;
  varying float value;
  
  void main() {
    vec2 res = vec2(960.0, 907.0);
    // Problem found: Related to resolution. u_resolution value is flawed

    vec2 st = gl_FragCoord.xy / u_resolution;
    // vec2 st = gl_FragCoord.xy / res;
    // 0.65977961432506887052341597796143
    vec2 mouse = u_fragMouse;

    // This code section related to setting the mouse position and the circle size with accordance to the aspect ratio
    st.x *= (u_resolution.x / u_resolution.y);
    mouse.x *= (u_resolution.x / u_resolution.y); 
    // st.x *= (res.x / res.y);
    // mouse.x *= (res.x / res.y); 
    
    // float r = texture2D(u_texture, vUv.xy + value*transfer * 0.5).r;
    // float g = texture2D(u_texture, vUv.xy + transfer * 0.525).g;
    // float b = texture2D(u_texture, vUv.xy + transfer * 0.4).b;

    // float diffuse = mix(r,g,u_fragMouse.x);
    float circle = step((1.0 / 16.0), distance(st, mouse)); // Radius is 1/16th of the NDC

    vec3 bgColor = mix(vec3(0.84, 0.808, 0.725), vec3(circle), 0.5);
    gl_FragColor = vec4(bgColor, 1.0);
  }