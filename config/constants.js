export const VARIABLE_REGEX = /\{\{(.*?)\}\}/g;
export const IF_REGEX = /\{\% if (.*?) \%\}(.*?)\{\% endif \%\}/gs;
export const FOR_REGEX = /\{\% for (.*?) in (.*?) \%\}(.*?)\{\% endfor \%\}/gs;