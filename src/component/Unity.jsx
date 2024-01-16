import React, { useEffect, useMemo, useState, useCallback, useRef } from "react";
import { Button, ProgressBar } from "react-bootstrap";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game() {
    const unityRef = useRef()
    const [state, setState] = useState(false)
    const [isGameOver, setIsGameOver] = useState(false);
    const [userName, setUserName] = useState();
    const [score, setScore] = useState();
    const [devicePixelRatio, setDevicePixelRatio] = useState(
        window.devicePixelRatio
    );

    useEffect(() => {
        console.log("unityRef", unityRef?.current?.height)
    }, [])

    useEffect(
        function () {
            // A function which will update the device pixel ratio of the Unity
            // Application to match the device pixel ratio of the browser.
            const updateDevicePixelRatio = function () {
                setDevicePixelRatio(window.devicePixelRatio);
            };
            // A media matcher which watches for changes in the device pixel ratio.
            const mediaMatcher = window.matchMedia(
                `screen and (resolution: ${devicePixelRatio}dppx)`
            );

            // Adding an event listener to the media matcher which will update the
            // device pixel ratio of the Unity Application when the device pixel
            // ratio changes.
            mediaMatcher.addEventListener("change", updateDevicePixelRatio);
            return function () {
                // Removing the event listener when the component unmounts.
                mediaMatcher.removeEventListener("change", updateDevicePixelRatio);
            };
        },
        [devicePixelRatio]
    );

    console.log("deviceP", devicePixelRatio)
    const { unityProvider, loadingProgression, isLoaded, sendMessage, addEventListener, removeEventListener, unload, requestFullscreen } = useUnityContext({
        // loaderUrl: "UnityBuild/Aviator.loader.js",
        // dataUrl: "UnityBuild/webgl.data",
        // frameworkUrl: "UnityBuild/build.framework.js",
        // codeUrl: "UnityBuild/build.wasm",
        loaderUrl: "Build/New2.loader.js",
        dataUrl: "Build/New2.data",
        frameworkUrl: "Build/New2.framework.js",
        codeUrl: "Build/New2.wasm",
        webGLContextAttributes: {
            alpha: true,
            antialias: true,
            depth: true,
            failIfMajorPerformanceCaveat: true,
            powerPreference: "high-performance",
            premultipliedAlpha: true,
            preserveDrawingBuffer: true,
            stencil: true,
            desynchronized: true,
            xrCompatible: true,
        },
    });
    const handleGameOver = useCallback((userName, score) => {
        setIsGameOver(true);
        setUserName(userName);
        setScore(score);
    }, []);

    useEffect(() => {
        addEventListener("GameOver", handleGameOver);
        return () => {
            removeEventListener("GameOver", handleGameOver);
        };
    }, [addEventListener, removeEventListener, handleGameOver]);
    function handleClickSpawnEnemies() {
        sendMessage("GameController", "SpawnEnemies", 100);
    }

    async function handleClickBack() {
        await unload();
        // Ready to navigate to another page.
    }

    function handleClickEnterFullscreen() {
        requestFullscreen(true);
    }

    return (
        <div class="card" style={{ width: "auto" }}>
            {!isLoaded && (
                <ProgressBar animated now={Math.round(loadingProgression * 100)} />
            )}
            {state ? <Unity
                ref={unityRef}
                unityProvider={unityProvider}
                style={{
                    width: "", height: '100vh', visibility: isLoaded ? "visible" : "hidden"
                }}
                devicePixelRatio={devicePixelRatio}
                className="unity-mobile"
            /> : <></>}
            <div class="card-body">
                <h5 class="card-title">Unity Game Dashboard</h5>
                <Button class="btn btn-primary" style={{ marginRight: '10px' }} onClick={() => setState(true)} >Start</Button>
                <Button variant="warning" style={{ marginRight: '10px' }} onClick={() => handleClickBack()} >Pause</Button>
                <Button variant="danger" style={{ marginRight: '10px' }} onClick={() => setState(false)} >Stop</Button>
                <Button variant="warning" onClick={() => handleClickEnterFullscreen()} >Fullcreen</Button>
            </div>
            <button onClick={handleClickSpawnEnemies}>Spawn Enemies</button>
            {/* {isGameOver === true && (
                <p>{`Game Over ${userName}! You've scored ${score} points.`}</p>
            )} */}
        </div>
    );
}


export default function UnityGame() {
    const game = useMemo(() => <Game />, [

    ])
    return game
}

// import React from "react";
// import { Unity, useUnityContext } from "react-unity-webgl";

// export default function UnityGame() {
//     const { unityProvider } = useUnityContext({
//         loaderUrl: "Build/Aviator.loader.js",
//         dataUrl: "Build/webgl.data",
//         frameworkUrl: "Build/build.framework.js",
//         codeUrl: "Build/build.wasm",
//     });

//     return (
//         <div class="card" style={{ width: "auto" }}>
//             <Unity
//                 unityProvider={unityProvider}
//                 style={{ width: "100%", height: '100%' }}
//             />
//             <div class="card-body">
//                 <h5 class="card-title">Unity games</h5>
//             </div>
//         </div>
//     );
// }

