export default function healthColor(health) {
  if (health.health > 50) {
    return "healthy";
  }
  if (health.health <= 50) {
    return "wounded";
  }
  return "critical";
}
