export const desc = (a, b, orderBy, type) => {
	switch(type) {
		case 'date':
    		return new Date(a[orderBy]) - new Date(b[orderBy])
    	case 'string': 
    		if (b[orderBy] < a[orderBy]) {
			  return -1
			}
			if (b[orderBy] > a[orderBy]) {
			  return 1
			}
			return 0
		default:
			if (b[orderBy] < a[orderBy]) {
			  return -1
			}
			if (b[orderBy] > a[orderBy]) {
			  return 1
			}
			return 0
	}
}

export const getSorting = (order, orderBy, type) => {
	return order === 'desc' ? (a, b) => desc(a, b, orderBy, type) : (a, b) => -desc(a, b, orderBy, type)
}