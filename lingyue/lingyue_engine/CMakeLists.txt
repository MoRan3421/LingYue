cmake_minimum_required(VERSION 3.10)
project(lingyue_engine LANGUAGES C)

set(CMAKE_C_STANDARD 11)

# Library output directory
set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/lib)

add_library(lingyue_engine SHARED 
    lingyue_core.c
    lingyue_core.h
)

if(WIN32)
    set_target_properties(lingyue_engine PROPERTIES WINDOWS_EXPORT_ALL_SYMBOLS TRUE)
endif()
