# Send OSC

This nodes sends OSC messages to a specified address. The messages can be a number, string, or an object.

:::tip
To see if the right messages are being sent, use the free [Protokol](https://hexler.net/protokol) app.
:::

## Send OSC + Pose Detection

There is a special mode for sending pose detection data. When connecting the output of a [Detect Pose](./detect-pose) node to this node, it will send out
all individiual channels as separate messages. For example, if the address is `/pose`, the messages will be formatted as follows:

```text
/pose/nose 0.35431 0.24342 0.23423478 0.9823
```

The values are `x`, `y`, `z` and `visibility` (whether the body part is visible or not).

There is also a pose filter parameter to specify the specific body parts to send. By default this sends everything (`*`). For example, to only send out the right and left shoulders:

```text
right_shoulder, left_shoulder
```

Here is the full list of body parts that can be sent out:

```text
nose,
left_eye_inner, left_eye, left_eye_outer, right_eye_inner, right_eye, right_eye_outer,
left_ear, right_ear, mouth_left, mouth_right,
left_shoulder, right_shoulder, left_elbow, right_elbow,
left_wrist, right_wrist, left_pinky, right_pinky, left_index, right_index, left_thumb, right_thumb,
left_hip, right_hip, left_knee, right_knee,
left_ankle, right_ankle, left_heel, right_heel, left_foot_index, right_foot_index
```

## Parameters

- **IP**: The IP address or host name of the machine to send to.
- **Port**: The port to send to.
- **Address**: The OSC address to send to. This should start with a `/`.
- **Pose Filter**: Filter out the messages by body part (only for pose data).

## Example

<img src="/img/nodes/send-osc-pose.jpg" alt="Figment send osc node sending out pose data"/>
