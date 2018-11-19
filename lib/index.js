"use strict"

const id = ({ publicId, systemId }) =>
  publicId ? ` PUBLIC "${publicId}"` : systemId ? ` SYSTEM "${systemId}"` : ""

export default doctype =>
  doctype == null ? "" : `<!DOCTYPE ${doctype.name}${id(doctype)}>`
