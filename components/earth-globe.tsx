"use client"

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function EarthGlobe() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mounted = useRef(false)

  useEffect(() => {
    if (!containerRef.current || mounted.current) return
    mounted.current = true
    
    // Initial position below viewport
    const startPosition = -2.5
    let currentPosition = startPosition
    const targetPosition = -1.5
    
    const scene = new THREE.Scene()
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    containerRef.current.appendChild(renderer.domElement)
    
    // Earth geometry and material - INCREASED SIZE from 0.5 to 0.9
    const earthGeometry = new THREE.SphereGeometry(1.5, 32, 32)
    const earthMaterial = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load('/textures/earthmap.jpeg'),
      bumpMap: new THREE.TextureLoader().load('/textures/earthbump.jpeg'),
      bumpScale: 0.01,
    })
    
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial)
    earthMesh.position.y = startPosition
    scene.add(earthMesh)
    
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3) // slightly increased brightness
    scene.add(ambientLight)
    
    // Point light
    const pointLight = new THREE.PointLight(0xffffff, 0.9)
    pointLight.position.set(5, 3, 5)
    scene.add(pointLight)
    
    // Camera setup - moved camera back slightly to fit larger Earth
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 2.1
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    
    window.addEventListener('resize', handleResize)
    
    const animate = () => {
      const animationId = requestAnimationFrame(animate)
      
      // Rotate the earth
      earthMesh.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), 0.002)
      
      // Animate the earth rising from the bottom
      if (currentPosition < targetPosition) {
        currentPosition += 0.01
        earthMesh.position.y = currentPosition
      }
      
      renderer.render(scene, camera)
      
      // Store animation ID for cleanup
      return animationId
    }
    
    const animationId = animate()
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
      earthGeometry.dispose()
      earthMaterial.dispose()
      renderer.dispose()
    }
  }, [])
  
  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ 
        position: 'absolute', 
        bottom: '-50%', 
        left: 0, 
        width: '100%', 
        height: '150%' 
      }}
    />
  )
}