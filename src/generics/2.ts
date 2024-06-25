type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

function compare<T extends Pick<AllType, 'name' | 'color'>, U extends Pick<AllType, 'position' | 'weight'>>
    (top: T, bottom: U): Pick<AllType, 'name' | 'color' | 'position' | 'weight'> {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}

