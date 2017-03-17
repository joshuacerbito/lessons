import reduce from './reduce';
import multiply from './multiply';

export default function quotient(list) {
  return reduce(list, multiply, 1);
}
