if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/alauddinkhan/.gradle/caches/8.11.1/transforms/dcaf28fd2ed26207cc39217fc67f269c/transformed/hermes-android-0.76.2-release/prefab/modules/libhermes/libs/android.x86/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/alauddinkhan/.gradle/caches/8.11.1/transforms/dcaf28fd2ed26207cc39217fc67f269c/transformed/hermes-android-0.76.2-release/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

