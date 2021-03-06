﻿#pragma strict
public var sonidoBumper1 : AudioClip;
public var sonidoBumper2 : AudioClip;
private var  flips: Flips =null;


function Start(){
	flips = Flips.M();
}

/* 
 * Establece una fuerza contraria en caso de pegar con un bumper
 */	
function OnCollisionEnter(collision : Collision) {
    if(collision.gameObject.tag=="Bumper"){
    	rigidbody.velocity.x = (transform.position.x-collision.gameObject.transform.position.x)*(9+rigidbody.velocity.x)*2;
		rigidbody.velocity.z = (transform.position.z-collision.gameObject.transform.position.z)*(5+rigidbody.velocity.z)*2;
		if(sonidoBumper1)
		{
			audio.PlayOneShot (sonidoBumper1);
		}
	}
    if(collision.gameObject.tag=="MiniBumperIzquierda"){
    	rigidbody.velocity.x = -(0.05+rigidbody.velocity.x)*6;
		rigidbody.velocity.z = -(0.05+rigidbody.velocity.z)*6;
		if(sonidoBumper2)
		{
			audio.PlayOneShot (sonidoBumper2);
		}
	}
	if(collision.gameObject.tag=="MiniBumperDerecha"){
    	rigidbody.velocity.x = (0.05+rigidbody.velocity.x)*6;
		rigidbody.velocity.z = -(0.05+rigidbody.velocity.z)*6;
		if(sonidoBumper2)
		{
			audio.PlayOneShot (sonidoBumper2);
		}
	}
	if(collision.gameObject.tag=="FlipR" && flips.der){
    	rigidbody.velocity.x = (transform.position.x-collision.gameObject.transform.position.x)*(9+rigidbody.velocity.x)*2;
		rigidbody.velocity.z = (transform.position.z-collision.gameObject.transform.position.z)*(5+rigidbody.velocity.z)*2;
	}
	if(collision.gameObject.tag=="FlipL" && flips.izq){
    	rigidbody.velocity.x = (transform.position.x-collision.gameObject.transform.position.x)*(9+rigidbody.velocity.x)*2;
		rigidbody.velocity.z = (transform.position.z-collision.gameObject.transform.position.z)*(5+rigidbody.velocity.z)*2;
	}
    
    

}